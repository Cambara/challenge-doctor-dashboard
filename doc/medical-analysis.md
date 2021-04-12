# Exame


## Exames ativos

**Route**: /medical-analysis
**Method**: GET

**Query**

```
{
  page?: number
  limit?: number
}
```

**Success Response**:

```
{
  "data": [ 
    {
      "labs": string[],
      "_id": string,
      "name": string,
      "type": "analise" | "clinica" | "imagem",
      "status": "ativo" | "inativo",
      "createdAt": Date,
      "updatedAt": Date
    }
  ],
  "status": boolean,
  "message": string
}
```

-----

## Adicionar um exame

**Route**: /medical-analysis
**Method**: POST

**Body**:

```
{
  "name": string,
  "type": "analise" | "clinica" | "imagem",
}
```

**Success Response**:

```
{
  "data": {
    "labs": string[],
      "_id": string,
      "name": string,
      "type": "analise" | "clinica" | "imagem",
      "status": "ativo" | "inativo",
      "createdAt": Date,
      "updatedAt": Date
  },
  "status": boolean,
  "message": string
}
```

-----

## Atualizar um exame

**Route**: /medical-analysis/:id
**Method**: PUT

**Body**:

```
{
  "name": string,
  "type": "analise" | "clinica" | "imagem"
}
```

**Success Response**:

```
{
  "data": {},
  "status": boolean,
  "message": string
}
```

-----

## Remover um exame

**Route**: /medical-analysis/:id
**Method**: DELETE

**Success Response**:

```
{
  "data": {},
  "status": boolean,
  "message": string
}
```

-----


## Associar um exame a um laboratório 

**Route**: /medical-analysis/:id/associate-lab
**Method**: PATCH

**Body**:

```
{
  "labId": string
}
```

**Success Response**:

```
{
  "data": {},
  "status": boolean,
  "message": string
}
```

## Desassociar um exame a um laboratório 

**Route**: /medical-analysis/:id/associate-lab
**Method**: PATCH

**Body**:

```
{
  "labId": string
}
```

**Success Response**:

```
{
  "data": {},
  "status": boolean,
  "message": string
}
```
