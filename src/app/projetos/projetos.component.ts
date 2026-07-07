import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
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
}
