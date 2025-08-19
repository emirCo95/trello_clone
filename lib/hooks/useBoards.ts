export function useBoards() {
  function createBoard(boardData: {
    title: string;
    description?: string;
    color?: string;
  }) {}

  return { createBoard };
}
