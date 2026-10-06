# Prova-05-10

## Sumário
- Requisitos
- Descrição do projeto
- Instruções para Docker Compose Up
- Endpoints CRUD

## Requisitos
- Docker Desktop
- Git
- Node

## Descrição do projeto
- Sistema de cadastro de Episódio de Podcast

## Instruções para Docker Compose Up
Executar comandos no terminal
- git clone https://github.com/victorrhugoeg/Prova-05-10.git
- cd Prova-05-10/deploy
- docker compose up -d --build

## Endpoints CRUD
| Requisição | Rota | Descrição |
|------------|------|-----------|
| GET | /episodes | Lista todos |
| GET | /episodes/:id | Busca um |
| POST | /episodes | Cria |
| PATCH | /episodes/:id | Atualiza |
| DELETE | /episodes/:id | Remove |

## Exemplos de resposta
```json
{ "show_name": "Podcast", "title": "Episodio 1", "duration": 6.7, "audio_url": "http://podcastaudiofaketeste.com" }
```