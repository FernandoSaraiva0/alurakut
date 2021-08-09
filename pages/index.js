import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutComons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'


function ProfileSidebar(propriedades) {
  return(
      <Box as="aside">
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
    const [comunidades, setComunidades] = React.useState([{
      id: '1510010511361561560056023102315', //Numero aleatório
      title: 'Eu odeio acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
    }]);
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
              <Box>
                <h2 className="subTitle">O que você deseja fazer?</h2>
                  <form onSubmit={function handleCriaComunidade(e) {
                    e.preventDefault();
                    const dadosDoForm = new FormData(e.target);

                    console.log('Campo: ', dadosDoForm.get('title'));
                    console.log('Campo: ', dadosDoForm.get('image'));
    
                    const comunidade = {
                      id: new Date().toISOString(),
                      title: dadosDoForm.get('title'),
                      image: dadosDoForm.get('image'),
                    }
                    const comunidadesAtualizadas = [...comunidades, comunidade];
                    setComunidades(comunidadesAtualizadas)
                  }}>
                    <div>
                      <input
                        placeholder="Qual vai ser o nome da sua comunidade?"
                        name="title"
                        aria-label="Qual vai ser o nome da sua comunidade?"
                        type="text"
                        />
                    </div>
                    <div>
                      <input
                        placeholder="Coloque uma URL para usarmos de capa"
                        name="image"
                        aria-label="Coloque uma URL para usarmos de capa"
                      />
                    </div>

                    <button>
                      Criar comunidade
                    </button>
                   </form>
            </Box>
          </div>

          <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
	            <ul>
	              {comunidades.map((itemAtual) =>{
		              return(
                    <li key={itemAtual.id}>
				              <a href={`/users/${itemAtual.title}`}>
					              <img src={itemAtual.image} />
					              <span>{itemAtual.title}</span>
				              </a>
                    </li>
                  )
                })}  
	           </ul>
          </ProfileRelationsBoxWrapper>

           <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Pessoas da Comuniade ({favoriteHumans.length})
              </h2>
              
              <ul>
                {favoriteHumans.map((itemAtual) => {
                  return(
                  <li key={itemAtual}>
                      <a href={`/users/${itemAtual}`}>
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </a>
                  </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>

          </div>
        </MainGrid>
    </>
    )
}