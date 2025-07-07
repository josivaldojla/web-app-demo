import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Globe, Code } from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleString('pt-BR'))

  const handleClick = () => {
    setCount((count) => count + 1)
    setLastUpdate(new Date().toLocaleString('pt-BR'))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Aplicativo Web Demo
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Demonstração de desenvolvimento web com GitHub integrado
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub Integrado
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Deploy Automático
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              React + Vite
            </Badge>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contador Interativo</CardTitle>
              <CardDescription>
                Clique no botão para incrementar o contador
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl font-bold text-red 500 mb-4">
                {count}
              </div>
              <div className="flex gap-2 justify-center mb-4">
                <Button 
                  onClick={handleClick}
                  size="lg"
                >
                  Incrementar Contador
                </Button>
                <Button 
                  onClick={() => {
                    setCount(0)
                    setLastUpdate(new Date().toLocaleString('pt-BR'))
                  }}
                  variant="outline"
                  size="lg"
                >
                  Reset
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Última atualização: {lastUpdate}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recursos do Projeto</CardTitle>
              <CardDescription>
                Tecnologias e funcionalidades implementadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  React 18 com Hooks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Vite para build rápido
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Tailwind CSS para estilização
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Componentes shadcn/ui
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Ícones Lucide React
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Integração com GitHub
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Sobre este Projeto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Este é um aplicativo web de demonstração criado para mostrar como é possível 
              desenvolver, versionar no GitHub e publicar aplicações web de forma integrada. 
              Todas as modificações feitas no código são automaticamente sincronizadas com 
              o repositório GitHub, permitindo acompanhamento em tempo real das mudanças.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
