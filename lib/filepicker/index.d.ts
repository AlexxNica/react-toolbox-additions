import * as React from "react";
import ReactToolbox from "react-toolbox/lib/index";

export interface FilePickerTheme {
  /**
   * Used for the root element.
   */
  filepicker?: string; 
  /**
   * Used for the input component.
   */
  input?: string;
  /**
   * Used for inline style of component.
   */
  inline?: string;
  /**
   * Used for the button component.
   */
  button?: string;
}

interface FilePickerProps extends ReactToolbox.Props {
  /**
   * This class will be applied to the root elemt.
   */
  className?: string;
  /**
   * This is button base properties like: accent, disabled, icon, ...
   */
  buttonProperties?: object
  /**
   * This is input base properties like: hint, disabled, icon, ...
   */
  inputProperties?: object
  /**
   * If true, the component will apear inline.
   * @default false
   */
  inline?: boolean
  /**
   * Callback called when the input is changing.
   */
  onChange?: Function;
  /**
   * Classnames object defining the component style.
   */
  theme?: FilePickerTheme;
  /**
   * This is initial value of input component.
   */
  value?: string
}

export class FilePicker extends React.Component<FilePickerProps, {}> { }

export default FilePicker;
