import React from 'react'
import Header from './Header'
import ActionButton from './ActionButon'
import Components from './Components'
import AddOption from './AddOption'

import OptionModal from './OpionModal'

export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            options: props.options,
            selectedOption: undefined
        }
        this.decide = this.decide.bind(this)
        this.addOption = this.addOption.bind(this)
        this.removeAllOptions = this.removeAllOptions.bind(this)
        this.removeAnOption = this.removeAnOption.bind(this)
        this.clearSelectedOption = this.clearSelectedOption.bind(this)
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options){
                this.setState(() => {
                    return {options: options}
                })
            }
        }catch(e){

        }
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }
    componentWillUnmount(){
        console.log('unmount')
    }
    clearSelectedOption(){
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        })
    }
    decide(){
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        this.setState(() => {
            return {
                selectedOption: this.state.options[randomNum]
            }
        })
    }
    addOption(option){
        if(!option){
            return 'No valid option!'
        }else if(this.state.options.indexOf(option) > -1){
            return 'Option already exists'
        }

        this.setState((prevState) => {
            return { options: prevState.options.concat(option) }
        })
    }
    removeAllOptions(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    removeAnOption(option){
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((indvOption) => {
                    return indvOption != option
                })
            }
        })
    }
    render(){
        const title = 'Indecision App'
        const subTitle = 'Choose competetive tasks randomly'
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <div className="container">
                    <ActionButton 
                        decide={this.decide}
                        activate={!this.state.options.length}
                    />
                    <div className="widget">
                        <Components 
                            removeAllOptions={this.removeAllOptions} 
                            options={this.state.options}
                            removeAnOption={this.removeAnOption}
                        />
                        <AddOption addOption={this.addOption}/>
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.clearSelectedOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}