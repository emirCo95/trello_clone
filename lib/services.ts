import { createClient } from './supabase/client';
import { Board, Column } from './supabase/models';

const supabase = createClient();

export const boardService = {
  async getBoards(userId: string): Promise<Board[]> {
    const { data, error } = await supabase
      .from('boards')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data || [];
  },
  async createBoard(
    board: Omit<Board, 'id' | 'created_at' | 'updated_at'>
  ): Promise<Board> {
    const { data, error } = await supabase
      .from('boards')
      .insert(board)
      .select()
      .single();

    if (error) throw error;

    return data;
  },
};

export const columnService = {
  async createColumn(
    column: Omit<Column, 'id' | 'created_at'>
  ): Promise<Column> {
    const { data, error } = await supabase
      .from('columns')
      .insert(column)
      .select()
      .single();

    if (error) throw error;

    return data;
  },
};

export const boardDataService = {
  async createBoardWithDefaultColumns(boardData: {
    title: string;
    description: string;
    color?: string;
    userId: string;
  }) {
    const board = await boardService.createBoard({
      title: boardData.title,
      description: boardData.description,
      color: boardData.color || 'bg-blue-500',
      user_id: boardData.userId,
    });

    const defaultColumns = [];
  },
};
