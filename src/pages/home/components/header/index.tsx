import { Container, Content, Nav, StyledRoot, StyledTrigger, StyledPortal, StyledContent, StyledLabel, StyledRadioGroup, StyledRadioItem, StyledItemIndicator, Menu } from "./styles";
import { availableThemes, useTheme } from "../../../../hooks/theme";
import { TbPaint } from 'react-icons/tb';

export function Header() {

  const { theme, toggleTheme } = useTheme()
   
  const iconColor = theme.third

  return (
    <Container>
      <Menu>
        <Content>
          <Nav href="#Home">Home</Nav>
          <Nav href="#About">About</Nav>
          <Nav href="#Skills">Skills</Nav>
          <Nav href="#Projects">Projects</Nav>
          <Nav href="#Contact">Contact</Nav>
        </Content>

        <StyledRoot>
          <StyledTrigger>
            <TbPaint size={20} color={iconColor}/>
          </StyledTrigger>

          <StyledPortal>
            <StyledContent>              
              <StyledLabel>
                Themes
              </StyledLabel>
                <StyledRadioGroup
                value={theme.id}
                onValueChange={( value : string ) => toggleTheme(value as availableThemes)}
                >
                  <StyledRadioItem value="blue"  >
                      Blue
                  </StyledRadioItem>

                  <StyledRadioItem value="cyan" >
                      Cyan
                  </StyledRadioItem>

                  <StyledRadioItem value="gray" >
                      Gray
                  </StyledRadioItem>

                  <StyledRadioItem value="green" >
                      Green
                  </StyledRadioItem>

                  <StyledRadioItem value="orange" >
                      Orange
                  </StyledRadioItem>

                  <StyledRadioItem value="pink" >
                      Pink
                  </StyledRadioItem>

                  <StyledRadioItem value="purple" >
                      Purple
                  </StyledRadioItem>

                  <StyledRadioItem value="red" >
                      Red
                  </StyledRadioItem>

                  <StyledRadioItem value="yellow" >
                      Yellow
                  </StyledRadioItem>
                </StyledRadioGroup>
              </StyledContent>
            </StyledPortal>
          </StyledRoot>
        </Menu>          
      </Container>
    )
  }

/*
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
export default () => (

  <DropdownMenu.Root>//

    <DropdownMenu.Trigger /> //
    <DropdownMenu.Portal> //

      <DropdownMenu.Content>//

        <DropdownMenu.Label />//

        <DropdownMenu.Item />
        <DropdownMenu.Group>

          <DropdownMenu.Item />

        </DropdownMenu.Group>
        <DropdownMenu.CheckboxItem>

          <DropdownMenu.ItemIndicator />

        </DropdownMenu.CheckboxItem>
        <DropdownMenu.RadioGroup>

          <DropdownMenu.RadioItem>

            <DropdownMenu.ItemIndicator />

          </DropdownMenu.RadioItem>

        </DropdownMenu.RadioGroup>
        <DropdownMenu.Sub>

          <DropdownMenu.SubTrigger />

          <DropdownMenu.Portal>

            <DropdownMenu.SubContent />

          </DropdownMenu.Portal>

        </DropdownMenu.Sub>
        <DropdownMenu.Separator />

        <DropdownMenu.Arrow />

      </DropdownMenu.Content>

    </DropdownMenu.Portal>

  </DropdownMenu.Root>

); */