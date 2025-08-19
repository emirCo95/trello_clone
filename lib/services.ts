import { createClient } from './supabase/client';

const supabase = createClient();

export const boardService = {
  async getBoards(userId: string) {
    const { data, error } = await supabase
      .from('boards')
      .select('*')
      .eq('user_id', userId)
      .order('create_at', { ascending: false });

    if (error) throw error;

    return data || [];
  },
};
