import { Floors } from '../types/floors';
import { Agua, Areia, Grama, Ouro, Pedra, Terra } from './floors';

function Floor({ type }: { type: Floors }) {
  switch (type) {
    case 'terra':
      return <Terra />;
    case 'agua':
      return <Agua />;
    case 'areia':
      return <Areia />;
    case 'pedra':
      return <Pedra />;
    case 'ouro':
      return <Ouro />;
    case 'grama':
      return <Grama />;
    default:
      return <Terra />;
  }
}

export default Floor;
