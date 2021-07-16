import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutComons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'


function ProfileSidebar(propriedades) {
  return(
      <Box>
        <img src={`https://github.com/${propriedades.User}.png`} /> 
        <hr />
        <a className="boxLink" href={`https://github.com/${propriedades.User}`}>
           {/* call user name */}
           @{propriedades.User}
        </a>
         
        <hr />

        {/* sidebar pre-conf */}
        <AlurakutProfileSidebarMenuDefault /> 
        
      </Box>
  )
}

export default function Home() {

    const User = "fernandosaraiva0";
    const favoriteHumans = [
      'peas',
      'omariosouto',
      'juunegreiros',
      'egermano'
    ]
    return (
      <>
        <AlurakutMenu/>
        <MainGrid>
          {/* <Box style="grid-area:profileArea;">  Não dá certo*/}
          <div className= "profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar User={User}/>
          </div>

          <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
            <Box>
              <h2 className="title">
                Bem-vindo(a)
              </h2>

              <OrkutNostalgicIconSet />
            </Box>
          </div>

          <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
           <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Pessoas da Comuniade ({favoriteHumans.length})
              </h2>
              
              <ul>
                {favoriteHumans.map((itemAtual) => {
                  return(
                  <li>
                      <a href={`/users/${itemAtual}`} key={itemAtual}>
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </a>
                  </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>

            <Box>
              comunidade
            </Box>
          </div>
        </MainGrid>
    </>
    )
}