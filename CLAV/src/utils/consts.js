const CONSTS = {};

// Nível mínimo para o utilizador poder editar
CONSTS.NIVEL_MINIMO_ALTERAR = 1;
CONSTS.NIVEL_MINIMO_DOC = 3.5;

CONSTS.NIVEIS_DEVOLVER_PEDIDO = [4, 5, 6, 7];
CONSTS.NIVEIS_DISTRIBUIR_PEDIDO = [4, 6, 7];
CONSTS.NIVEIS_ANALISAR_PEDIDO = [3.5, 4, 6, 7];
CONSTS.NIVEIS_VALIDAR_PEDIDO = [4, 6, 7];
CONSTS.NIVEIS_SUBSTITUIR_RESPONSAVEL = [4, 5, 6, 7];
CONSTS.NIVEIS_CONSULTAR_WORKFLOW = [3.5, 4, 5, 6, 7];

// TODO: Adicionar niveis para poderem ver o histórico
CONSTS.NIVEIS_CONSULTAR_HISTORICO = [4, 6, 7];

export default CONSTS;