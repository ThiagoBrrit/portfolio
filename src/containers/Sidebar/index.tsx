import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Titulo fontSize={20}>Thiago Brito</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        ThiagoBrrit
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Futuro Dev Full stack
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
