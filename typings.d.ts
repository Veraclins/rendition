declare module 'resin-components' {
	import { Component } from 'react';

	type ResponsiveStyle = string | number | Array<string | number>;

	interface StyledSystemProps {
		width?: ResponsiveStyle;
		w?: ResponsiveStyle;
		fontSize?: ResponsiveStyle;
		f?: ResponsiveStyle;
		color?: ResponsiveStyle;
		bg?: ResponsiveStyle;
		m?: ResponsiveStyle;
		mt?: ResponsiveStyle;
		mr?: ResponsiveStyle;
		mb?: ResponsiveStyle;
		ml?: ResponsiveStyle;
		mx?: ResponsiveStyle;
		my?: ResponsiveStyle;
		p?: ResponsiveStyle;
		pt?: ResponsiveStyle;
		pr?: ResponsiveStyle;
		pb?: ResponsiveStyle;
		pl?: ResponsiveStyle;
		px?: ResponsiveStyle;
		py?: ResponsiveStyle;
	}

	// Cherry pick the react attributes that don't conflict with styled-system
	interface DefaultProps
		extends StyledSystemProps,
			React.DOMAttributes<HTMLElement> {
		// React-specific Attributes
		defaultChecked?: boolean;
		defaultValue?: string | string[];
		suppressContentEditableWarning?: boolean;

		// Standard HTML Attributes
		accessKey?: string;
		className?: string;
		contentEditable?: boolean;
		contextMenu?: string;
		dir?: string;
		draggable?: boolean;
		hidden?: boolean;
		id?: string;
		lang?: string;
		slot?: string;
		spellCheck?: boolean;
		style?: React.CSSProperties;
		tabIndex?: number;
		title?: string;
	}

	type PineDataType =
		| 'Boolean'
		| 'Case Insensitive Text'
		| 'Date Time'
		| 'Date'
		| 'Integer'
		| 'Real'
		| 'Short Text'
		| 'Text'
		| 'Time'
		| 'Semver Range'
		| 'Semver';

	interface SchemaEntry {
		type: PineDataType;
		values?: string[];
		label?: string;
	}

	interface Schema {
		[key: string]: SchemaEntry;
	}

	interface FilterRule {
		availableOperators: string[];
		id: string;
		label: string;
		name: string;
		operator: string;
		type: string;
		value: any;
	}

	interface SingleFilterView {
		id: string;
		name: string;
		scopeKey: string;
		rules: FilterRule[];
	}

	interface FilterViewScope {
		key: string;
		scopeLabel?: string;
		title?: string;
		data: SingleFilterView[];
	}

	class RenderableElementWithProps<PropsType, StateType> extends Component<
		PropsType,
		StateType
	> {}

	interface Coloring {
		primary?: boolean;
		secondary?: boolean;
		tertiary?: boolean;
		quartenary?: boolean;
		danger?: boolean;
		warning?: boolean;
		success?: boolean;
		info?: boolean;
	}

	interface Sizing {
		emphasized?: boolean;
	}

	interface BannerProps extends DefaultProps {
		backgroundImage?: string;
	}

	class BannerProps extends RenderableElementWithProps<BoxProps, any> {}

	interface BoxProps extends DefaultProps {
		flex?: string | string[];
		order?: number | string | Array<number | string>;
	}

	class Box extends RenderableElementWithProps<BoxProps, any> {}

	interface ButtonProps extends DefaultProps, Coloring, Sizing {
		square?: boolean;
		disabled?: boolean;
		outline?: boolean;
		underline?: boolean;
	}

	class Button extends RenderableElementWithProps<ButtonProps, any> {}

	interface CodeWithCopyProps extends DefaultProps {
		copy: string;
		text: string;
	}

	class CodeWithCopy extends RenderableElementWithProps<
		CodeWithCopyProps,
		any
	> {}

	class Container extends RenderableElementWithProps<DefaultProps, any> {}

	class DeleteButton extends RenderableElementWithProps<DefaultProps, any> {}

	interface DeviceStatusGaugeProps extends DefaultProps {
		devices: any[];
	}

	class DeviceStatusGauge extends RenderableElementWithProps<
		DeviceStatusGaugeProps,
		any
	> {}

	class Divider extends RenderableElementWithProps<DefaultProps, any> {}

	interface DropDownButtonProps extends DefaultProps, Coloring {
		disabled?: boolean;
		label?: JSX.Element;
		border?: boolean;
		joined?: boolean;
		alignRight?: boolean;
		noListFormat?: boolean;
	}

	class DropDownButton extends RenderableElementWithProps<
		DropDownButtonProps,
		any
	> {}

	interface FiltersProps extends DefaultProps {
		disabled?: boolean;
		rules: FilterRule[];
		views: FilterViewScope[];
		schema: Schema;
		setViews(views: SingleFilterView[]): void;
		setRules(rules: FilterRule[]): void;
	}

	class Filters extends RenderableElementWithProps<FiltersProps, any> {}

	class Fixed extends RenderableElementWithProps<DefaultProps, any> {}

	interface FlexProps extends BoxProps {
		align?: string | string[];
		justify?: string | string[];
		direction?: string | string[];
		wrap?: boolean | boolean[] | string;
		column?: boolean;
	}

	class Flex extends RenderableElementWithProps<FlexProps, any> {}

	namespace Heading {
		class h4 extends RenderableElementWithProps<FlexProps, any> {}
	}

	interface LinkProps extends DefaultProps {
		blank?: boolean;
		disabled?: boolean;
		download?: any;
		href?: string;
		hrefLang?: string;
		media?: string;
		rel?: string;
		target?: string;
		type?: string;
		as?: string;
	}

	class Link extends RenderableElementWithProps<LinkProps, any> {}

	interface InputProps extends DefaultProps, Sizing {}

	class Input extends RenderableElementWithProps<InputProps, any> {}

	class Image extends RenderableElementWithProps<
		DefaultProps & React.ImgHTMLAttributes<HTMLImageElement>,
		any
	> {}

	class Modal extends RenderableElementWithProps<
		DefaultProps & {
			title: string;
			action: string;
			cancel: () => any;
			done: () => any;
		},
		any
	> {}

	class Navbar extends RenderableElementWithProps<
		DefaultProps & {
			brand: JSX.Element;
		},
		any
	> {}

	interface PineTypeModule {
		rules: {
			[key: string]: (target: any, value?: any) => boolean;
		};
		validate: (value: any) => boolean;
		Edit: (props: any) => JSX.Element;
		Display: (props: any) => JSX.Element;
	}

	var PineTypes: { [K in PineDataType]: PineTypeModule };

	class Provider extends Component<any, any> {}

	interface ProgressBarProps extends DefaultProps, Coloring {
		value: number;
	}

	class ProgressBar extends RenderableElementWithProps<ProgressBarProps, any> {}

	class SchemaSieveClass {
		filter<T>(items: T[], rule: FilterRule): T[];
	}

	function SchemaSieve(): SchemaSieveClass;

	interface SelectProps extends DefaultProps, Sizing {}

	class Select extends RenderableElementWithProps<SelectProps, any> {}

	class Text extends RenderableElementWithProps<DefaultProps, any> {}

	interface TextareaProps extends DefaultProps {
		autoComplete?: string;
		autoFocus?: boolean;
		cols?: number;
		dirName?: string;
		disabled?: boolean;
		form?: string;
		maxLength?: number;
		minLength?: number;
		name?: string;
		placeholder?: string;
		readOnly?: boolean;
		required?: boolean;
		rows?: number;
		value?: string | string[] | number;
		wrap?: string;

		onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
	}

	class Textarea extends RenderableElementWithProps<TextareaProps, any> {}

	interface TooltipProps extends DefaultProps {
		message?: string;
		eventType: string;
	}

	class Tooltip extends RenderableElementWithProps<TooltipProps, any> {}
}