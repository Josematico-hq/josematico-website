import { promises as fs } from 'fs'

const filesToReplace = [
  'src/pages/es/blog/[post].astro',
  'src/pages/es/blog/[page].astro',
  'src/pages/es/index.astro',
  'src/pages/es/blog.astro'
]

async function replaceText (filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    const replacedContent = data.replace(/startsWith\("en\/"\)/g, 'startsWith("es/")')
    await fs.writeFile(filePath, replacedContent, 'utf8')
    console.log(`Reemplazo realizado en el archivo ${filePath}`)
  } catch (err) {
    console.error(`Error al procesar el archivo ${filePath}:`, err)
  }
}

filesToReplace.forEach(replaceText)
