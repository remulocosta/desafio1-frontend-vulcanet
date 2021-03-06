import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';

import CheckCircle from '../../assets/check-circle.svg';
import Loading from '../../assets/loading.svg';
import Balloon from '../../assets/pz-icon.svg';
import api from '../../services/api';
import {
  Container,
  LoadingLooping,
  ContentPeriod,
  ContentPlans,
  Plan,
  HeaderPlan,
  PlanPrice,
  ButtonSelectPlan,
  ContentFeatures,
  ContentAttendant,
  ContentAttendantButtons,
  ContentFooter,
} from './styles';

interface IPlan {
  id: number;
  name: string;
  description: string;
  prices: {
    monthly: number;
    yearly: number;
  };
  features: string[];
}

const Layout: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState<IPlan[]>([]);
  const [period, setPeriod] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<IPlan>({} as IPlan);
  const [attendantAmount, setAttendantAmount] = useState(0);
  const [attendantCost, setAttendantCost] = useState(0);

  const handleAttendantAmount = useCallback((newValue: number) => {
    setAttendantAmount((value) => {
      return value <= 0 && newValue === -1 ? 0 : value + newValue;
    });
  }, []);

  const handleSelectPlan = useCallback(
    (planId: number) => {
      const selected = plans.filter((plan) => plan.id === planId);
      if (selected[0]) {
        setSelectedPlan(selected[0]);
      }
    },
    [plans],
  );

  const handleTogglePeriod = useCallback(() => {
    setPeriod((togglePeriod) => !togglePeriod);
  }, []);

  useEffect(() => {
    api.get(`/attendant`).then((response) => {
      const attendant = response.data;

      setAttendantCost(attendant?.cost);
    });
  }, []);

  useEffect(() => {
    setLoading(true);

    api.get(`/plans`).then((response) => {
      const Plans = response.data as IPlan[];

      setPlans(Plans);
      setPeriod(false);
      const selected = Plans.filter((plan) => plan.id === 2);

      if (selected[0]) {
        setSelectedPlan(selected[0]);
      }
      setLoading(false);
    });
  }, [setPlans]);

  const planAmount = useMemo(() => {
    let planValue = period
      ? selectedPlan.prices?.yearly
      : selectedPlan.prices?.monthly;

    planValue += attendantCost * attendantAmount;

    return planValue;
  }, [period, selectedPlan, attendantCost, attendantAmount]);

  const handleConfirmation = useCallback(() => {
    toast(
      <>
        <p>
          <b>Compra efetuada com sucesso!</b>
        </p>
        <span>Plano Selecionado: {selectedPlan.name}</span>
        <br />
        Total: R${planAmount}/mês
      </>,
    );
  }, [planAmount, selectedPlan.name]);

  return (
    <Container>
      {loading ? (
        <LoadingLooping>
          <img src={Loading} alt="Loading" />
        </LoadingLooping>
      ) : (
        <>
          <ContentPeriod>
            <button type="button" onClick={handleTogglePeriod}>
              <div className={!period ? 'selected' : 'not-selected'}>
                Mensal
              </div>
              <div className={period ? 'selected' : 'not-selected'}>Anual</div>
            </button>
          </ContentPeriod>
          <ContentPlans>
            {plans.map((plan) => (
              <Plan key={plan.id}>
                <HeaderPlan>
                  <div>
                    <img src={Balloon} alt="pz-icon" />
                    <p>{plan.name}</p>
                  </div>
                  <span>{plan.description}</span>
                </HeaderPlan>

                {period ? (
                  <PlanPrice>{`R$${plan.prices.yearly}/anual`}</PlanPrice>
                ) : (
                  <PlanPrice>{`R$${plan.prices.monthly}/mês`}</PlanPrice>
                )}

                <div>
                  <ButtonSelectPlan
                    onClick={() => handleSelectPlan(plan.id)}
                    selected={plan.id === selectedPlan.id}
                  >
                    Selecionar
                  </ButtonSelectPlan>
                </div>

                <ContentFeatures>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <img src={CheckCircle} alt="Checked" />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ContentFeatures>
              </Plan>
            ))}
          </ContentPlans>
          <ContentAttendant>
            <div>
              <p>Atendentes</p>
              <span>{`+R$${attendantCost}/mês por atendente`}</span>
            </div>
            <ContentAttendantButtons>
              <button type="button" onClick={() => handleAttendantAmount(-1)}>
                <FaChevronLeft size={15} />
              </button>
              <p>{attendantAmount}</p>
              <button type="button" onClick={() => handleAttendantAmount(1)}>
                <FaChevronRight size={15} />
              </button>
            </ContentAttendantButtons>
          </ContentAttendant>
          <ContentFooter>
            <div>
              <p>{`Total: R$${planAmount}/mês`}</p>
              <span>
                {`Plano selecionado: ${selectedPlan.name} - ${
                  period ? 'mensal' : 'anual'
                }`}
              </span>
            </div>
            <button type="button" onClick={() => handleConfirmation()}>
              Contratar
            </button>
          </ContentFooter>
        </>
      )}
    </Container>
  );
};

export default Layout;
