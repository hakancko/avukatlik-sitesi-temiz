export type Database = {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          created_at: string
          isim: string
          telefon: string
          email: string
          konu: string
          mesaj: string
          okundu: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          isim: string
          telefon: string
          email: string
          konu: string
          mesaj: string
          okundu?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          isim?: string
          telefon?: string
          email?: string
          konu?: string
          mesaj?: string
          okundu?: boolean
        }
      }
    }
  }
}

