# aea6-usuari1-usuari2

Projecte de pràctiques de Git i GitHub en parella, de l'AEA6 del mòdul M0614. 

## Instal·lació i configuració de Git

Instal·lació a Ubuntu/Debian:

```bash
sudo apt install git
```

Configuració del nom i correu (una sola vegada):

```bash
git config --global user.name "Sara Paredes"
git config --global user.email "sparedes.daw2n26@lamerce.com"
```

## Ús del control de versions

Cada canvi es fa en una branca pròpia (`feature/...`). En acabar,
es puja amb `git push` i s'obre un **Pull Request** a GitHub perquè
l'altra persona el revisi abans de fusionar-lo a `main`.

La branca `main` té activada la protecció de branca: no s'hi pot
fer `git push` directament, només mitjançant un Pull Request
revisat. L'autenticació es fa amb un *token d'accés personal* en
lloc de contrasenya.

| Branca | Autor |
|--------|-------|
| feature/header | Propietari |
| feature/footer | Col·laborador |