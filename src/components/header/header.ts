import { Component } from '../component/component';

export class Header extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header class="main-header">
      <h1 class="main-title">My Series</h1>
      </header>
    `;
  }
}
