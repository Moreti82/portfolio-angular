import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface Service {
  title: string;
  description: string;
  details: string[];
  featured?: boolean;
}

interface SkillGroup {
  label: string;
  items: string[];
}

interface Differential {
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  private host = inject(ElementRef<HTMLElement>);

  readonly stats = [
    { value: '3+', label: 'anos de experiência' },
    { value: '20+', label: 'projetos entregues' },
    { value: '100%', label: 'taxa de entrega' }
  ];

  readonly skillGroups: SkillGroup[] = [
    { label: 'Front-end', items: ['HTML', 'CSS / Tailwind', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Figma'] },
    { label: 'Back-end', items: ['Node.js', 'PHP', 'Python', 'MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'] },
    { label: 'Mobile & DevOps', items: ['React Native', 'Docker', 'Git / CI-CD'] }
  ];

  readonly services: Service[] = [
    {
      title: 'Back End',
      description: 'APIs robustas, microserviços e bancos de dados otimizados. Arquitetura que escala com o seu negócio sem limitações.',
      details: ['APIs RESTful & GraphQL', 'Node.js / Python / Express', 'PostgreSQL / MongoDB', 'Autenticação & Segurança']
    },
    {
      title: 'Front End',
      description: 'Interfaces modernas, responsivas e de alta performance. Experiências digitais que engajam e convertem visitantes em clientes.',
      details: ['React & Next.js', 'TypeScript', 'Animações & UX', 'Performance (Core Vitals)']
    },
    {
      title: 'Web',
      description: 'Sites institucionais, landing pages e e-commerce que geram resultados reais. Do conceito ao deploy em produção.',
      details: ['Sites Institucionais', 'Landing Pages de Alta Conversão', 'E-commerce Completo', 'SEO Técnico'],
      featured: true
    },
    {
      title: 'Mobile',
      description: 'Aplicativos para iOS e Android com experiência nativa e código compartilhado. Mais velocidade de entrega, menos custo.',
      details: ['React Native', 'PWA', 'iOS & Android', 'Push Notifications']
    },
    {
      title: 'Soluções',
      description: 'Consultoria técnica, automações inteligentes e integrações com IA. Resolvemos problemas complexos com tecnologia de ponta.',
      details: ['Consultoria Técnica', 'Automações & Integrações', 'Integração com IA', 'Manutenção & Suporte']
    }
  ];

  readonly projects: Project[] = [
    {
      badge: '⭐ SAAS',
      title: 'FinançasPro',
      description: 'Plataforma de gestão financeira pessoal com dashboard interativo, categorias, relatórios PDF e assinatura via Mercado Pago.',
      tags: ['React', 'Supabase', 'Mercado Pago'],
      link: '/projeto-financaspro'
    },
    {
      badge: '🏥 SAÚDE',
      title: 'Personalize Odonto',
      description: 'Sistema completo para clínicas odontológicas com odontograma digital, agendamento inteligente e controle financeiro.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '/projeto-clinica'
    },
    {
      badge: '🤖 IA',
      title: 'Assistente de IA',
      description: 'Bot integrado ao WhatsApp com IA para responder perguntas e resumir artigos automaticamente, 24h por dia.',
      tags: ['Python', 'OpenAI', 'WhatsApp'],
      link: '/projeto-assistente'
    },
    {
      badge: '🛒 E-COMMERCE',
      title: 'Dashboard E-commerce',
      description: 'Painel administrativo com gráficos em tempo real, gerenciamento de estoque e controle completo de vendas.',
      tags: ['React', 'Chart.js', 'Node.js'],
      link: '/projeto-ecommerce'
    }
  ];

  readonly differentials: Differential[] = [
    { title: 'Entrega no prazo', description: 'Comprometimento em cada projeto' },
    { title: 'Código limpo e documentado', description: 'Fácil de manter e evoluir' },
    { title: 'Suporte pós-entrega', description: 'Presente depois do lançamento' },
    { title: 'Atendimento remoto Brasil', description: 'Baseados em Campo Grande, MS' }
  ];

  readonly processSteps: ProcessStep[] = [
    { number: '01', title: 'Entendemos sua necessidade', description: 'Conversamos sobre seu projeto, objetivos e desafios. Sem jargão técnico — queremos entender seu negócio.' },
    { number: '02', title: 'Planejamos a solução', description: 'Definimos escopo, tecnologias, prazos e orçamento. Você aprova tudo antes de começarmos.' },
    { number: '03', title: 'Desenvolvemos com qualidade', description: 'Código limpo, testes e atualizações frequentes. Você acompanha o progresso em tempo real.' },
    { number: '04', title: 'Entregamos e suportamos', description: 'Deploy em produção, treinamento e suporte pós-entrega. O projeto não termina no lançamento.' }
  ];

  ngAfterViewInit(): void {
    const elements: HTMLElement[] = Array.from(
      this.host.nativeElement.querySelectorAll('.reveal')
    );

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
  }
}
