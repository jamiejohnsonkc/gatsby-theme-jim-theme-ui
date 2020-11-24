/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { Component } from 'react'
import './colorModeToggle.css'

/*
Toggle Switch Component
Note: id is required for ToggleSwitch component to function. Name, currentValue, defaultChecked, Small and onChange're optional.
Usage: <ToggleSwitch id="id" onChange={function (e) { console.log("Checkbox Current State: " + e.target.checked); }} />
*/

class ThemeUiColorModeToggle extends Component {
	state = {
		checked: this.props.defaultChecked,
	}
	onChange = (e) => {
		this.setState({
			checked: e.target.checked,
		})
		if (typeof this.props.onChange === 'function') this.props.onChange()
	}
	render() {
		return (
			<Box
				className={
					'color-toggle-switch' + (this.props.Small ? ' small-switch' : '')
				}
			>
				<input
					type='checkbox'
					name={this.props.Name}
					className='color-toggle-switch-checkbox'
					id={this.props.id}
					checked={this.props.currentValue}
					defaultChecked={this.props.defaultChecked}
					onChange={this.onChange}
					disabled={this.props.disabled}
				/>
				{this.props.id ? (
					<label className='color-toggle-switch-label' htmlFor={this.props.id}>
						<span
							className={
								this.props.disabled
									? 'color-toggle-switch-inner color-toggle-switch-disabled'
									: 'color-toggle-switch-inner'
							}
						/>
						<span
							className={
								this.props.disabled
									? 'color-toggle-switch-switch color-toggle-switch-disabled'
									: 'color-toggle-switch-switch'
							}
						/>
					</label>
				) : null}
			</Box>
		)
	}
}
ThemeUiColorModeToggle.propTypes = {}

ThemeUiColorModeToggle.defaultProps = {}

export default ThemeUiColorModeToggle
