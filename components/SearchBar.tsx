import { TextInput, TextStyle } from "react-native"
import { debounce } from "lodash";

type SearchBarProps = {
    value?: string;
    onChange: Function;
    placeholder: string;
    debounceWait?: number;
    style?: TextStyle;
}

const defaultStyle: TextStyle = { height: "auto", width: '100%', fontSize: 16, borderColor: 'darkgray', borderBottomWidth: 2, paddingHorizontal: 8, paddingVertical: 4}

export const SearchBar = ({onChange, placeholder, style, debounceWait = 500 }: SearchBarProps) => {
  const debounced = debounce((searchText) => {
        onChange(searchText)
    }, debounceWait);
    return (<TextInput style={{...defaultStyle, ...style}} onChangeText={debounced} placeholder={placeholder}  />);
}
