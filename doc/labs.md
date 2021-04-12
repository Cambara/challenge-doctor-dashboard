# Laboratório


## Laboratórios ativos

**Route**: /labs  
**Method**: GET

**Query**: 

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
      "_id": string,
      "name": string,
      "address": {
        "street": string,
        "district": string,
        "number": string,
        "city": string,
        "state": string,
        "postalCode": string
      },
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

## Adicionar um laboratório

**Route**: /labs  
**Method**: POST

**Body**:

```
{
  "name": string,
	"address": {
		"street": string,
    "district": string,
		"number": string,
		"city": string,
		"state": string,
		"postalCode": string
	}
}
```

**Success Response**:

```
{
  "data": {
    "_id": string,
    "name": string,
    "address": {
      "street": string,
      "district": string,
      "number": string,
      "city": string,
      "state": string,
      "postalCode": string
    },
    "status": "ativo" | "inativo",
    "createdAt": Date,
    "updatedAt": Date
  },
  "status": boolean,
  "message": string
}
```

-----

## Atualizar um laboratório

**Route**: /labs/:id  
**Method**: PUT

**Body**:

```
{
  "name": string,
	"address": {
		"street": string,
    "district": string,
		"number": string,
		"city": string,
		"state": string,
		"postalCode": string
	}
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

## Remover um laboratório

**Route**: /labs/:id  
**Method**: DELETE

**Success Response**:

```
{
  "data": {},
  "status": boolean,
  "message": string
}
```
