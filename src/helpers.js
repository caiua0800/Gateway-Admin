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
            console.log("Resposta obtida: ");
            console.log(res.data);
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
            console.log("Resposta obtida: ");
            console.log(res.data);
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
    }


}

export default helpers;