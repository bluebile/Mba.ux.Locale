/**
 * Componente de Locale para uso em apps Sencha.
 *
 * Para uso deste componente crie um arquivo messages.json.
 * na pasta locale do seu projeto com a seguinte estrutura 
 *
 *
 *  @example
 * 
 * {
 * "usuario": {
 * 
 *
 * 		"dadosInvalidos": "Dados inválidos. Por favor verifique os dados digitados e tente novamente",
 *
 * 		"falhaConexao": "Não foi possível realizar a autenticação. Tente novamente mais tarde",
 *
 * 		"falha":"Falha na autenticação",
 *
 * 		"login":"Usuário ou senha inválidos",
 *
 * 		"naoEncontrado": "Usuário não cadastrado"
 *
 * 	},
 * 
 * }
 * 
 *      title: MbaLocale.get('usuario.login'),
*/

Ext.define('Mba.ux.Locale.LocaleManager', {
	  /**
      * Propriedades de configuração
      */
	config: {
		
        
     /**
     * @cfg {String} nomeArquivo (required)
     * Propriedade que define o nome do arquivos das mensagens.
     */
		nomeArquivo: 'messages',
    /**
     * @cfg {String} nomeArquivo (required)
     * Propriedade que define o separador do arquivos das mensagens.
     */
		separadorLinguagem: '_',
    /**
     * @cfg {String} separadorLinguagem (required)
     * Propriedade que define o lingua Padrao.
     */		
		linguagemPadrao: 'pt-br',
	 /**
     * @cfg {String} linguagemPadrao (required)
     * Propriedade que define o caminho do arquivos das mensagens.
     */
		diretorio: 'resources/locale/',
		
     /**
     * @cfg {Object} locale (required)
     * Propriedade private que define o objeto de locale retornado.
     */
		locale: null,
	/**
     * @cfg {Object} deviceLanguage (required)
     * Propriedade private que define o lingua default para dispositivo.
     */	
		deviceLanguage: null,
		
	},
	
    /**
     * Construtor do componente.
     * @param {Object} [cfg] Recebe as configurações
     */
	constructor: function(config) {
		this.initConfig(config);
		
		// obtendo a linguagem do dispositivo.
		var language = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguages;
		language && (language = language.toLowerCase());
		this.setDeviceLanguage(language);
		language = (language && language != this.getLinguagemPadrao()) ? this.getSeparadorLinguagem() + language: "";
		// montando a URL do arquivo de mensagem.
		var url = this.obterPrefixo() + this.getNomeArquivo() + language + ".json";
		
		// carregando arquivo de mensagem.
		var locale = this.carregarLocaleObject(url);
		if (!locale && language != "") {
			// carregando arquivo padrão de mensagem porque não encontrou o arquivo da linguagem especificada.
			url = url.replace(language, "");
			locale = this.carregarLocaleObject(url);
		}
		
		this.setLocale(locale);
	},
	 /**
     * Carrega o objeto de locale.
     * @param {String} Url para carregar o arquivo JSON
     */
	carregarLocaleObject: function(url) {
		var response = null;

        try {
            Ext.Ajax.request({
                method: 'GET',
                url: url + "?dc="+Ext.Date.now(),
                responseType: 'text',
                async: false,
                success: function(xhr) {
                    response =  eval("(" + xhr.responseText + ")");
                }
            });
        } catch (e) {
            alert(e.message);
        }

		return response;
	},
	 /**
     * Obtem prefixo do arquivo  objeto de locale.
     * @return {String} esteArquivo:
     * @method obterPrefixo
     */	
	obterPrefixo: function() {
		if (this.getDiretorio() != null) {
			return this.getDiretorio();
		}
		
		var name = this.self.getName();
		var esteArquivo = Ext.Loader.getPath(name);
		var caminhos = esteArquivo.split('/');
		var nomeArquivo = caminhos[caminhos.length - 1];
		
		return esteArquivo.replace(nomeArquivo, "");
	},
    
    
    /**
     * Retorna a chave dentro do arquivo JSON.
     * @param {String} Key chave o arquivo JSON
     * @param {String} defaultText Texto default caso nao encontre a chave
     */
    get: function(key, defaultText) {
    	var inicialKey = key;
        keys = key.split('.');
        var kNum = keys.length;
        var locale = this.getLocale();

        for (var i = 0; i < kNum; i++) {
            key = keys[i];

            if (locale) {
                locale = locale[key];
            }
        }

        return locale || defaultText || inicialKey;
    },
    
    
    format: function() {
        var theString = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            theString = theString.replace(regEx, arguments[i]);
        }
        
        return theString;
    }

});
