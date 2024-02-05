
const Conteudo = () => {

	return (
		<div className="content-form">
			<form className="form-avalia-curso" action="">
				<div className="form-bloco form-bloco-simples">
					<span>Titulo</span><br></br>
					<input placeholder="Resposta" />
					<hr />
				</div>
				<div className="form-bloco form-bloco-niveis">
					<span>Titulo</span><br></br>
					<div className="table">
						<div className="tr">
							<div className="td"></div>
							<div className="td">Fraco</div>
							<div className="td">Moderado</div>
							<div className="td">Satisfatório</div>
							<div className="td">Muito bom</div>
							<div className="td">Excelente</div>
						</div>
						<div className="tr">
							<div className="td">
								Seu nível de dedicação ao curso
							</div>
							<div className="td">
								<input type="radio" />
							</div>
							<div className="td">
								<input type="radio" />
							</div>
							<div className="td">
								<input type="radio" />
							</div>
							<div className="td">
								<input type="radio" />
							</div>
							<div className="td">
								<input type="radio" />
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Conteudo;