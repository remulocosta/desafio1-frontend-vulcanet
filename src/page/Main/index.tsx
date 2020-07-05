import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import CheckCircle from '../../assets/check-circle.svg';
import Balloon from '../../assets/pz-icon.svg';
import {
  Container,
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

const Layout: React.FC = () => {
  return (
    <Container>
      <ContentPeriod>
        <button type="button">
          <div className="selected button-mensal">Mensal</div>
          <div className="not-selected button-anual">Anual</div>
        </button>
      </ContentPeriod>

      <ContentPlans>
        <Plan>
          <HeaderPlan>
            <div>
              <img src={Balloon} alt="pz-icon" />
              <p>Plano 1.0</p>
            </div>
            <span>Perfeito para experimentar o peçaZap</span>
          </HeaderPlan>

          <PlanPrice>R$150/mês</PlanPrice>

          <div>
            <ButtonSelectPlan>Selecionar</ButtonSelectPlan>
          </div>

          <ContentFeatures>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Até 1000 clientes</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Workflow padrão</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Fila de atendimento</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Menu de atendimento</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Carteirização</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Mensagem noturna</p>
            </li>
          </ContentFeatures>
        </Plan>
        <Plan>
          <HeaderPlan>
            <div>
              <img src={Balloon} alt="pz-icon" />
              <p>Plano 1.0</p>
            </div>
            <span>Perfeito para experimentar o peçaZap</span>
          </HeaderPlan>

          <PlanPrice>R$150/mês</PlanPrice>

          <div>
            <ButtonSelectPlan>Selecionar</ButtonSelectPlan>
          </div>

          <ContentFeatures>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Até 1000 clientes</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Workflow padrão</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Fila de atendimento</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Menu de atendimento</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Carteirização</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Mensagem noturna</p>
            </li>
          </ContentFeatures>
        </Plan>
        <Plan>
          <HeaderPlan>
            <div>
              <img src={Balloon} alt="pz-icon" />
              <p>Plano 1.0</p>
            </div>
            <span>Perfeito para experimentar o peçaZap</span>
          </HeaderPlan>

          <PlanPrice>R$150/mês</PlanPrice>

          <div>
            <ButtonSelectPlan style={{ background: '#43B998', color: '#FFF' }}>
              Selecionar
            </ButtonSelectPlan>
          </div>

          <ContentFeatures>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Até 1000 clientes</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Workflow padrão</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Fila de atendimento</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Menu de atendimento</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Carteirização</p>
            </li>
            <li>
              <img src={CheckCircle} alt="Checked" />
              <p>Mensagem noturna</p>
            </li>
          </ContentFeatures>
        </Plan>
      </ContentPlans>

      <ContentAttendant>
        <div>
          <p>Atendentes</p>
          <span>+R$130/mês por atendente</span>
        </div>
        <ContentAttendantButtons>
          <button type="button">
            <FaChevronLeft size={15} />
          </button>
          <p>0</p>
          <button type="button">
            <FaChevronRight size={15} />
          </button>
        </ContentAttendantButtons>
      </ContentAttendant>
      <ContentFooter>
        <div>
          <p>Total: R$450/mês</p>
          <span>Plano selecionado: Plano Turbo - Mensal</span>
        </div>
        <button type="button">Contratar</button>
      </ContentFooter>
    </Container>
  );
};

export default Layout;
