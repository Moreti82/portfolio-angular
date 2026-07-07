import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface ProjectDetail {
  title: string;
  badge: string;
  subtitle: string;
  about: string;
  features: string[];
  tags: string[];
  images?: string[];
}

@Component({
  selector: 'app-projeto-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projeto-detail.component.html',
  styleUrl: './projeto-detail.component.scss'
})
export class ProjetoDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);

  projectKey: string = '';
  project: ProjectDetail | null = null;
  activeImage: string = '';

  readonly projectsData: Record<string, ProjectDetail> = {
    financaspro: {
      title: 'FinançasPro',
      badge: 'SAAS',
      subtitle: 'Plataforma de gestão financeira pessoal com dashboard e relatórios.',
      about: 'O FinançasPro é uma plataforma SaaS de gestão financeira pessoal. Inclui dashboard em tempo real, categorias personalizadas, extrato detalhado, relatórios em PDF e sistema de assinatura via Mercado Pago.',
      features: [
        'Dashboard em tempo real',
        'Categorias personalizadas',
        'Relatórios em PDF',
        'Assinatura Mercado Pago'
      ],
      tags: ['React', 'JavaScript', 'Supabase', 'Mercado Pago', 'Chart.js'],
      images: [
        'assets/financas_dashboard.png',
        'assets/financas_modal.png'
      ]
    },
    clinica: {
      title: 'Personalize Odonto',
      badge: 'SAÚDE',
      subtitle: 'Sistema completo de gestão para clínicas odontológicas.',
      about: 'O Personalize Odonto é um sistema desenvolvido sob medida para clínicas odontológicas. Conta com prontuário eletrônico completo, odontograma digital interativo, agenda inteligente e controle de fluxo de caixa para a administração da clínica.',
      features: [
        'Odontograma Digital',
        'Agendamento',
        'Prontuário Eletrônico',
        'Controle Financeiro'
      ],
      tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      images: [
        'assets/clinica_dashboard.png',
        'assets/clinica_odontograma.png',
        'assets/clinica_calendario.png',
        'assets/clinica_agendamento.png'
      ]
    },
    assistente: {
      title: 'Assistente de IA',
      badge: 'IA',
      subtitle: 'Bot integrado ao WhatsApp com Inteligência Artificial.',
      about: 'Bot de IA integrado ao WhatsApp que usa a API da OpenAI para responder perguntas, resumir artigos e auxiliar em tarefas. Inclui base de conhecimento própria e respostas personalizadas.',
      features: [
        'Integração WhatsApp',
        'Respostas com IA',
        'Base de conhecimento',
        'Resumo de artigos'
      ],
      tags: ['Python', 'OpenAI', 'WhatsApp API']
    },
    ecommerce: {
      title: 'Dashboard E-commerce',
      badge: 'E-COMMERCE',
      subtitle: 'Painel administrativo com gráficos em tempo real.',
      about: 'Dashboard administrativo completo para e-commerce. Inclui gráficos em tempo real, gerenciamento de estoque, controle de vendas e usuários.',
      features: [
        'Gráficos em tempo real',
        'Gerenciamento de estoque',
        'Controle de vendas',
        'Gestão de usuários'
      ],
      tags: ['React', 'Chart.js', 'Node.js']
    }
  };

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.projectKey = data['id'] || '';
      this.project = this.projectsData[this.projectKey] || null;
      if (this.project && this.project.images && this.project.images.length > 0) {
        this.activeImage = this.project.images[0];
      } else {
        this.activeImage = '';
      }
    });
  }

  setImage(image: string) {
    this.activeImage = image;
  }
}
