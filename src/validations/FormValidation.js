import * as yup from 'yup';

export const schema = yup.object().shape({
	name: yup.string().max(42).required('O campo nome é obrigatorio'),
	email: yup.string().max(254).required('O campo email é obrigatorio'),
	cep: yup.string().min(8,'O campo cep deve conter 8 caracteres, não utilize hifens (-) ou espaços, digite apenas numeros').max(8,'O campo cep deve conter 8 caracteres, não utilize hifens (-) ou espaços, digite apenas numeros').required('O campo cep é obrigatorio'),
	uf: yup.string().max(2,'O campo uf (Unidade Federal) deve conter a sigla de seu estado (ex: SP,RJ,MG)').required('O campo uf é obrigatorio'),
	cidade: yup.string().max(42).required('O campo cidade é obrigatorio'),
	logradouro: yup.string().max(42).required('O campo logradouro é obrigatorio')
});