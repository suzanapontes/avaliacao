export enum FlagStatus {
  LigeiramenteAlto = 'Ligeiramente Alto',
  Obeso = 'Obeso',
  Media = 'Média',
  Baixo = 'Baixo',
  Alto = 'Alto',
  Desconhecido = 'Desconhecido'
}

export const FlagStatusDetails = {
  [FlagStatus.LigeiramenteAlto]: { color: 'yellow', descricao: 'Ligeiramente Alto' },
  [FlagStatus.Obeso]: { color: 'red', descricao: 'Obeso' },
  [FlagStatus.Media]: { color: 'green', descricao: 'Média' },
  [FlagStatus.Baixo]: { color: 'green', descricao: 'Baixo' },
  [FlagStatus.Alto]: { color: 'yellow', descricao: 'Alto' },
  [FlagStatus.Desconhecido]: { color: 'white', descricao: '' }
};