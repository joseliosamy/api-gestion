//
//
//
module.exports = (req,res) =>{
	if(req.method === 'GET'){
		res.json([
			//NLW1
			{
				id: 1,
				eventName: "Cliente - Liberando acessos no Meta Ads",
				bannerURL: "https://github.com/joseliosamy/api-gestion/blob/main/images/meta.jpg?raw=true",
				redirectURL: "/conteudo-cliente/liberando-acessos-meta-ads",
				eps: [
					{
						epURL: "2ke0uNppt8c",
						epName: "Tutorial 01 - Criando BM"
				},
					{
						epURL: "mBb_NeXthCE",
						epName: "Tutorial 02 - Adicionando pessoa na BM"
				},
					{
						epURL: "EwO_IiZ5D-w",
						epName: "Tutorial 03 - Criando Pagina"
				},
					{
						epURL: "3ksPcqZv6d8",
						epName: "Tutorial 04 - Conta de anúncio + acesso"
				},
					{
						epURL: "DTs_hnqA92c",
						epName: "Tutorial 05 - Conta do instagram + acesso"
				},
				{
					epURL: "WCb8egblwAc",
					epName: "Tutorial 06 - Adicionando Whatsapp Business"
				},
				{
					epURL: "JQwFrXljvsc",
					epName: "Tutorial 07 - Pixel + acesso"
				}
			]
			// },
			// //NLW2
			// {
			// 	id: 2,
			// 	eventName: "Next Level Week #2",
			// 	bannerURL: "https://github.com/joseliosamy/api-todeveloper/blob/main/images/nlw2.jpg?raw=true",
			// 	redirectURL: "/eventos/next-level-week-2",
			// 	eps: [
			// 		{
			// 			epURL: "N_Gp83nwR2w",
			// 			epName: "Aula 01 - Acelerando sua evolução"
			// 	},
			// 		{
			// 			epURL: "ff2W0baASXA",
			// 			epName: "Aula 02 - Olhando para as oportunidades"
			// 	},
			// 		{
			// 			epURL: "o8nFAiEM10Q",
			// 			epName: "Aula 03 - A escolha da stack"
			// 	},
			// 		{
			// 			epURL: "dlkIhtyiJnE",
			// 			epName: "Aula 04 - Até 2 anos em 2 meses"
			// 	},
			// 		{
			// 			epURL: "kuGEcBZd9D0",
			// 			epName: "Aula 05 - A milha extra"
			// 	}
			// 	],
			// 	complementaryMaterial: [
			// 		{
			// 			downloadURL: "https://drive.google.com/u/0/uc?id=1QzHR42CdDIoVuUmTjyzZYAllatUKhHDx&export=download"
			// 		},
			// 		{
			// 			repositoryGIT: "https://github.com/rocketseat-education/nlw-02-discovery"
			// 		},
			// 		{
			// 			figma: "https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web"
			// 		}
			// 	]
			}
			
		]);
	}else{
		res.json([
			{status:'404'} 
		])
	};
};