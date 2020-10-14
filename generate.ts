// @ts-nocheck
const fs = require('fs')
const mkdir = require('mkdirp')
const path = require('path')

const writeFile = (p, ...args) => {
  fs.writeFileSync(p, args)
}

// Arguments
const inputComponentName = process.argv[2]
const styled = process.argv[3] === '--styled'
const workspace = styled ? '/elements' : 'components'

// Paths
const rootPath = path.join(__dirname, `./src/${workspace}`)
const compRoot = path.join(rootPath, inputComponentName)

if (fs.existsSync(compRoot)) {
  console.error('Component already exists.')
  // @ts-ignore
  return
}

mkdir.sync(compRoot)

writeFile(
  path.join(compRoot, `${inputComponentName}.style.tsx`),
  `import React from 'react';
import styled from '../../../stitches.config';\n
`
)

writeFile(
  path.join(compRoot, `${inputComponentName}.tsx`),
  `import * as React from 'react';\n

export interface ${inputComponentName}Props {
            
}

export const ${inputComponentName}: React.SFC<${inputComponentName}Props> = () => {
    return (
        <div>${inputComponentName}</div>
    );
}`
)
