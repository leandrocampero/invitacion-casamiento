/* eslint-disable no-console */
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const DOMAINS_DIR = 'domains'

const DOMAINS_APPLICATION_DIR = 'application'
const DOMAINS_USECASES_DIR = 'use-cases'
const DOMAINS_PORTS_DIR = 'ports'
const DOMAINS_PORTS_SERVICES_DIR = 'services'
const DOMAINS_PORTS_REPOSITORIES_DIR = 'repositories'
const DOMAINS_PORTS_DATASOURCES_DIR = 'data-sources'

const DOMAINS_CORE_DIR = 'core'
const DOMAINS_CORE_ENTITIES_DIR = 'entities'
const DOMAINS_CORE_EXCEPTIONS_DIR = 'exceptions'
const DOMAINS_CORE_TRANSLATIONS_DIR = 'translations'

const domainName = process.argv[2]

if (!domainName) {
  console.error('Domain name missing.')
  process.exit(1)
}

// Get current working directory
const currentDirectory = process.cwd()

const domainsDirectory = join(currentDirectory, DOMAINS_DIR)

try {
  if (!existsSync(domainsDirectory)) {
    throw new Error('Domains directory not found.')
  }

  // Generate Domain directory
  const newDomainDirectory = join(domainsDirectory, domainName)
  mkdirSync(newDomainDirectory)
  verbose(newDomainDirectory, domainName)

  /***************************************************************************/

  // Generate Damain Application directory
  const applicationDir = join(newDomainDirectory, DOMAINS_APPLICATION_DIR)
  mkdirSync(applicationDir)
  verbose(applicationDir, DOMAINS_APPLICATION_DIR)

  // Generate Domain Usecases directory
  const usecasesDir = join(applicationDir, DOMAINS_USECASES_DIR)
  mkdirSync(usecasesDir)
  verbose(usecasesDir, DOMAINS_USECASES_DIR)

  // Generate Domain Ports directory
  const portsDir = join(applicationDir, DOMAINS_PORTS_DIR)
  mkdirSync(portsDir)
  verbose(portsDir, DOMAINS_PORTS_DIR)

  // Generate Domain Ports Services directory
  const servicePortsDir = join(portsDir, DOMAINS_PORTS_SERVICES_DIR)
  mkdirSync(servicePortsDir)
  verbose(servicePortsDir, DOMAINS_PORTS_SERVICES_DIR)

  // Generate Domain Ports Repositories directory
  const repositoriesPortsDir = join(portsDir, DOMAINS_PORTS_REPOSITORIES_DIR)
  mkdirSync(repositoriesPortsDir)
  verbose(repositoriesPortsDir, DOMAINS_PORTS_REPOSITORIES_DIR)

  // Generate Domain Ports Datasources directory
  const dataSourcesPortsDir = join(portsDir, DOMAINS_PORTS_DATASOURCES_DIR)
  mkdirSync(dataSourcesPortsDir)
  verbose(dataSourcesPortsDir, DOMAINS_PORTS_DATASOURCES_DIR)

  /***************************************************************************/

  // Generate Domain Core directory
  const coreDir = join(newDomainDirectory, DOMAINS_CORE_DIR)
  mkdirSync(coreDir)
  verbose(coreDir, DOMAINS_CORE_DIR)

  // Generate Domain Core Entities directory
  const entitiesDir = join(coreDir, DOMAINS_CORE_ENTITIES_DIR)
  mkdirSync(entitiesDir)
  verbose(entitiesDir, DOMAINS_CORE_ENTITIES_DIR)

  // Generate Domain Core Exceptions directory
  const exceptionsDir = join(coreDir, DOMAINS_CORE_EXCEPTIONS_DIR)
  mkdirSync(exceptionsDir)
  verbose(exceptionsDir, DOMAINS_CORE_EXCEPTIONS_DIR)

  // Generate Domain Core Translations directory
  const translationsDir = join(coreDir, DOMAINS_CORE_TRANSLATIONS_DIR)
  mkdirSync(translationsDir)
  verbose(translationsDir, DOMAINS_CORE_TRANSLATIONS_DIR)

  /***************************************************************************/

  console.log(
    `Domain '${domainName}' succesfully generated in'${newDomainDirectory}'.`
  )
} catch (error) {
  console.error('Error generating domain:', error.message)
}

function verbose(dirname, message) {
  console.log(`\t- ${message} Directory created at: ${dirname}`)
}
/* eslint-enable no-console */
