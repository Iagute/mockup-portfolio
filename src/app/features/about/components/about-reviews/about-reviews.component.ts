import { Component } from '@angular/core';

@Component({
  selector: 'about-reviews',
  standalone: false,
  
  templateUrl: './about-reviews.component.html',
  styleUrl: './about-reviews.component.css'
})
export class AboutReviewsComponent {

  public reviewItem: any[] = [
    {
      img: 'img/testimonio1.jpg',
      text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Mollitia similique ipsum repudiandae eveniet aspernatur recusandae repellat, 
        quia laudantium perspiciatis quae porro eius, tempore modi quasi dolorem blanditiis quo ipsam nemo.
      `,
      name: 'Ana Lopez',
      company: 'Developers S.A'
    },
    {
      img: 'img/testimonio2.jpg',
      text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Mollitia similique ipsum repudiandae eveniet aspernatur recusandae repellat, 
        quia laudantium perspiciatis quae porro eius, tempore modi quasi dolorem blanditiis quo ipsam nemo.
      `,
      name: 'Rubén Martinez',
      company: 'Fullstack S.L'
    },
  ]

}
