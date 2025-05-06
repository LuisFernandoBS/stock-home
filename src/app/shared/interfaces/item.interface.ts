export interface Item {
    nome: string;
    icone: string;
    quantidade: number;
    unidade: string;
    categoria: string;
    prioridade: number;
    status: boolean;
    filtrado?: boolean;
}

export interface Categoria {
    descricao: string;
    icone: string;
    valor: string;
}