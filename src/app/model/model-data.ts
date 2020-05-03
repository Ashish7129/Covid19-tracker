import { InMemoryDbService } from 'angular-in-memory-web-api';
import { News } from './news';
import { IAdmin } from './data';

export class ModelData implements InMemoryDbService {
  createDb() {
    const news: News[] = [
      {
        id: 1,
        title: 'Memory in a Time of Quarantine',
        description:
          'How will humanity record the unprecedented predicament we find ourselves in?',
        summary:
          'The past couple of months have been heavy for us at The Scientist. Heavy for everyone. From our home offices, we’ve been tirelessly reporting on the global pandemic that continues to grip the world in its stranglehold. We are trying to stay atop a flood of information and stories that need telling as we also contend with challenges that most of us have never confronted, and none of us will likely soon forget. At the same time, we continue to search across the life sciences for other nuggets of research worth sharing. This month, our issue is focused on the science of memory.',
        images: ['/assets/images/garden-cart.png'],
      },
      {
        id: 2,
        title: 'Inflammatory disease',
        description:
          'Coronavirus linked to rare inflammatory disease in children – here’s what we know',
        summary:
          'The UK Paediatric Intensive Care Society sent out an alert on April 27 about an increase in cases of severe COVID-19-related illness in children. Since then, 19 cases have been identified in children in the UK and 100 cases have been identified in five other countries (US, France, Italy, Spain and Switzerland). This is a new situation and only minimal information is available at present, though there are very few cases and the vast majority of COVID-19 infections in children are still very mild.',
        images: ['/assets/images/garden-cart.png'],
      },
    ];
    const admin: IAdmin[] = [
      {
        id: 1,
        email: 'admin@gmail.com',
        password: 'admin1234',
      },
    ];
    return { news, admin };
  }

  genId<T extends News | IAdmin>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map((t) => t.id)) + 1 : 11;
  }
}
