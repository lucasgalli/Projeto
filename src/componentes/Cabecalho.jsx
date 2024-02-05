import { useState } from "react";

const Topo = () => {

	const [botaoStatus, botaoAtivar] = useState('tab1');

	const eventoCliqueTab = (tab) => {
		botaoAtivar(tab);
	}

	return (
		<>
			<div className='topo'>
				<div>
					<h1>Rating</h1>
				</div>
			</div>
			<div className='menu'>
				<div className={'topo-tab1 ' + (botaoStatus === 'tab1' ? 'active' : '')} onClick={() => eventoCliqueTab('tab1')}>
					opção 1
				</div>
				<div className={'topo-tab2 ' + (botaoStatus === 'tab2' ? 'active' : '')} onClick={() => eventoCliqueTab('tab2')}>
					Opção 2
				</div >
			</div >
		</>
	);
}

export default Topo;