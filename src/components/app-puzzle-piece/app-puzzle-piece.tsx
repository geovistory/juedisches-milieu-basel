import { Component, h, Fragment, Prop } from '@stencil/core';
import routerProvider from '../../global/router-provider';
import { state, AppState } from '../../global/store';

@Component({
  tag: 'app-puzzle-piece',
  styleUrl: 'app-puzzle-piece.css',
  // shadow: true,
})
export class AppPuzzlePiece {
  @Prop() pieceId: keyof AppState;
  @Prop() label: string;

  render() {
    return (
      <Fragment>
        <div class={`puzzle-piece ${state[this.pieceId] ? 'done' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              onClick={() => routerProvider.ionRouterElement.push('/puzzle/' + this.pieceId, 'forward')}
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M413.66 246.1H386a2 2 0 01-2-2v-77.24A38.86 38.86 0 00345.14 128H267.9a2 2 0 01-2-2V98.34c0-27.14-21.5-49.86-48.64-50.33a49.53 49.53 0 00-50.4 49.51V126a2 2 0 01-2 2H87.62A39.74 39.74 0 0048 167.62V238a2 2 0 002 2h26.91c29.37 0 53.68 25.48 54.09 54.85.42 29.87-23.51 57.15-53.29 57.15H50a2 2 0 00-2 2v70.38A39.74 39.74 0 0087.62 464H158a2 2 0 002-2v-20.93c0-30.28 24.75-56.35 55-57.06 30.1-.7 57 20.31 57 50.28V462a2 2 0 002 2h71.14A38.86 38.86 0 00384 425.14v-78a2 2 0 012-2h28.48c27.63 0 49.52-22.67 49.52-50.4s-23.2-48.64-50.34-48.64z"
            ></path>
          </svg>
          <div>{this.label}</div>
        </div>
      </Fragment>
    );
  }
}
