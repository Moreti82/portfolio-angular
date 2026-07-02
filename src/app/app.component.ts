import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

interface Service {
  title: string;
  description: string;
}

interface SkillGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  private host = inject(ElementRef<HTMLElement>);

  readonly navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' }
  ];

  readonly stats = [
    { value: '10+', label: 'anos de experiência' },
    { value: '30+', label: 'projetos entregues' },
    { value: '3', label: 'plataformas: web, mobile e desktop' }
  ];

  readonly skillGroups: SkillGroup[] = [
    { label: 'Front-end', items: ['Angular', 'React', 'TypeScript', 'HTML/CSS', 'SCSS'] },
    { label: 'Back-end', items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Firebase'] },
    { label: 'Mobile', items: ['Kotlin', 'Flutter', 'Android SDK'] },
    { label: 'Ferramentas', items: ['Git', 'Docker', 'CI/CD', 'Figma'] }
  ];

  readonly services: Service[] = [
    {
      title: 'Software sob medida',
      description: 'Sistemas completos desenhados para o seu processo, do levantamento de requisitos à entrega em produção.'
    },
    {
      title: 'Aplicativos Android',
      description: 'Apps nativos em Kotlin ou multiplataforma com Flutter, com integração a APIs e notificações em tempo real.'
    },
    {
      title: 'Web Apps',
      description: 'Aplicações web modernas e responsivas com Angular, React e Node.js, prontas para escalar.'
    },
    {
      title: 'Aplicações Desktop',
      description: 'Ferramentas de produtividade e sistemas internos para Windows com foco em performance.'
    },
    {
      title: 'Consultoria em Engenharia',
      description: 'Revisão de arquitetura, boas práticas, qualidade de código e mentoria técnica para o seu time.'
    },
    {
      title: 'Integrações & APIs',
      description: 'Conexão entre sistemas, automação de rotinas e construção de APIs seguras e documentadas.'
    }
  ];

  readonly projects: Project[] = [
    {
      title: 'Sistema de Gestão Clínica',
      description: 'Plataforma web para agendamentos, prontuários eletrônicos e controle financeiro, com foco em produtividade da equipe.',
      tags: ['Angular', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'App Android de Atendimento',
      description: 'Aplicativo móvel com notificações em tempo real, modo offline e integração com APIs REST.',
      tags: ['Kotlin', 'Firebase', 'REST']
    },
    {
      title: 'Dashboard Executivo',
      description: 'Painel de indicadores para tomada de decisão, com gráficos interativos e monitoramento de performance.',
      tags: ['React', 'TypeScript', 'Charts']
    },
    {
      title: 'Automação de Processos',
      description: 'Ferramenta desktop que eliminou tarefas manuais repetitivas, reduzindo horas de trabalho operacional por semana.',
      tags: ['Desktop', 'Integrações', 'Windows']
    }
  ];

  readonly currentYear = new Date().getFullYear();

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
