import axios from "axios";

const helpers = {

    getPlatformInfo: async (client) => {
        const url = helpers.handleClientURL(client);

        if (!url) {
            console.log("url:")
            console.log(url);
            return null;
        }

        try {
            const res = await axios.get(url);  // Aguarda a resposta da chamada.
            return res.data;
        } catch (error) {
            console.log("Erro ao obter resposta");
            console.log(error);
            return null;
        }
    },

    getClientWithdrawals: async (client) => {
        const url = helpers.handleClientURL(client);

        if (!url) {
            console.log("url inválida")
            return null;
        }

        try {
            const res = await axios.get(`${url}/withdraw`);  // Aguarda a resposta da chamada.
            return res.data;
        } catch (error) {
            console.log("Erro ao obter resposta");
            console.log(error);
            return null;
        }
    },

    handleClientURL: (client) => {
        switch (client) {
            case "Oscar":
                const url = process.env.REACT_APP_URL_PLATAFORMA_OSCAR;
                return url;
            default:
                return null;
        }
    },

    formatarNumero: (valor) => {
        const numero = typeof valor === 'string' ? parseFloat(valor) : valor;
        if (isNaN(numero))
            return null;
        return numero.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },

    handleStatus: (st) => {
        return st === 1 ? "Pendente" : st === 2 ? "Pago" : "Cancelado";
    },

    formatarData: (dataString) => {
        const data = new Date(dataString);
        const dia = String(data.getUTCDate()).padStart(2, '0');
        const mes = String(data.getUTCMonth() + 1).padStart(2, '0'); // Meses começam em 0
        const ano = data.getUTCFullYear();
        const hora = String(data.getUTCHours()).padStart(2, '0');
        const minuto = String(data.getUTCMinutes()).padStart(2, '0');
        return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    },

    editarStatusSaque: async (id, newStatus) => {
        if (!id || !newStatus) {
            console.log("Erro ao atualizar status do saque.");
            return;
        }

        try {
            const res = await axios.put(`${process.env.REACT_APP_EDIT_WITHDRAW}${id}/${newStatus}`);
            console.log(res);
            if (res.status === 204)
                return true;
            else return false;
        } catch (error) {
            console.log("Erro ao editar status do saque.")
            return false;
        }
    },


}

export default helpers;