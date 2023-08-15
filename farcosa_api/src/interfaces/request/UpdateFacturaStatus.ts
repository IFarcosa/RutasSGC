import zod from 'zod'

export const UpdateFacturaRequestValidator = zod.object({
  facturaId: zod.string(),
  entregada: zod.enum(['S', 'R']),
  comentarioEnt: zod.string().min(1)
})

export type UpdateFacturaResquest = zod.infer<typeof UpdateFacturaRequestValidator>
