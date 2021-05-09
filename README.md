# Service provider API

### Install dependencies
```
yarn
```

### Run the api

```
yarn dev
```

# Endpoint

### Generate requests
Endpoint to generate 5 requests based on sending skills

```
POST /generate-requests
{
  skills: []
}

```
Response example
```
[
  {
    name: 'Dynamic Implementation Technician',
    skills: [ 'UX design', 'devops', 'swift' ],
    startDate: 2021-10-10T18:52:49.541Z,
    endDate: 2022-10-04T11:37:02.466Z
  },
  {
    name: 'Investor Quality Administrator',
    skills: [ 'swift', 'javascript', 'python' ],
    startDate: 2021-10-17T21:49:29.783Z,
    endDate: 2023-11-06T00:08:37.920Z
  },
  {
    name: 'Product Applications Developer',
    skills: [ 'UX design', 'swift', 'javascript' ],
    startDate: 2021-07-03T21:14:06.958Z,
    endDate: 2022-09-20T13:27:30.351Z
  },
  {
    name: 'Dynamic Intranet Producer',
    skills: [ 'javascript', 'objective c', 'swift' ],
    startDate: 2021-10-10T18:52:49.541Z,
    endDate: 2022-07-02T06:35:20.475Z
  },
  {
    name: 'Legacy Tactics Orchestrator',
    skills: [ 'devops', 'javascript', 'swift' ],
    startDate: 2021-09-23T09:08:46.905Z,
    endDate: 2024-10-06T11:43:06.611Z
  }
]
```
