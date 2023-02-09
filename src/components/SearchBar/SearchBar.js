import elements from "./SearchBar.styled"

const { Form, Input, SearchBtn, SearchBarContainer, MugnifyingGlass, CrissCross, ClearBtn } = elements

const SearchBar = ({ handleQuery }) => {

    const clear = (e) => {
        console.log(e)


    }

    return (
        <SearchBarContainer>
            <Form onSubmit={handleQuery}>
                <Input type="text" name="search" placeholder="Search" />

                <SearchBtn type="submit">
                    <MugnifyingGlass />
                </SearchBtn>
                <ClearBtn onClick={clear} type="button">
                    <CrissCross />
                </ClearBtn>
            </Form>
        </SearchBarContainer >
    )
}

export default SearchBar