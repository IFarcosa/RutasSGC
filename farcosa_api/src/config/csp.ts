import { expressCspHeader, NONE, SELF, INLINE } from 'express-csp-header'

export function csp() {
  return expressCspHeader({
    directives: {
      'default-src': [SELF],
      'script-src': [SELF, INLINE],
      'style-src': [SELF, INLINE],
      'img-src': ['data:', 'images.com'],
      'worker-src': [NONE],
      'block-all-mixed-content': true,
      'font-src': [INLINE],
      'frame-src': [INLINE]
    }
  })
}
