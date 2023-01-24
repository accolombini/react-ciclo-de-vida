// Vamos fazer uim importe para criarmos um componente de classe
import React, { Component } from 'react';

// Lembrando --> todo componente de classe deve conter o método render() que irá renderizar na tela
class MeuComponente extends Component {

    constructor(props) {
        super(props); //Chama a classe pai
        
        this.state = { numero: 5 };
        this.adicionarNumero = this.adicionarNumero.bind(this);

        console.log('constructor...');

        //this.setState({numero: 5}); não faça isso
        //this.state.numero = 5;  não faça isso
    }

    // Este é o único método que será utilizado que é estático. Este método não têm acesso à instância do componente
   static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps...')
    // console.log(props)
    // console.log(state)
    // return { numero: 6 };
    return null;  // return null não altera o estado
    }

    // Mais um método chave para o processo. Este método é invocado ló após a renderização

    componentDidMount() {
        console.log('componentDidMount...');
    }

    // Este método informa se o componente deve ou não ser atualizado

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate...');
        console.log('Estado atual', this.state);
        console.log('Próximo estado', nextState);

        // return false  // Ao return false o componente não será renderizado
        return true  // Ao retornar true o componente será renderizado/atualizado
    }

    // O método a seguir é chamado para informar se o componente foi atualizado

    componentDidUpdate() {
        console.log('componentDidUpdate...');

    }


    // Criar a função adicionar número

    adicionarNumero() {
        console.log('setState...');
        let numeroAtual = this.state.numero;
        numeroAtual += 1;

        this.setState({ numero: numeroAtual });
    }

    render() {
        console.log('render...');
        return <div>
            <p>{this.props.titulo}</p>
            <p>{this.state.numero}</p>

            <button onClick={ this.adicionarNumero }>
                Adicionar numero
            </button>
        </div>
    }
}

// Ao criar um componente precisamos exportá-lo

export default MeuComponente
