import {VisualProperties, VisualUniforms, ValuesOf} from "./visual"
import * as p from "../properties"
import * as mixins from "../property_mixins"
import {Context2d} from "../util/canvas"

export interface Image extends Readonly<mixins.Image> {}
export class Image extends VisualProperties {
  get doit(): boolean {
    const alpha = this.global_alpha.get_value()
    return !(alpha == 0)
  }

  apply(ctx: Context2d): boolean {
    const {doit} = this
    if (doit) {
      this.set_value(ctx)
    }
    return doit
  }

  Values: ValuesOf<mixins.Image>
  values(): this["Values"] {
    return {
      global_alpha: this.global_alpha.get_value(),
    }
  }

  set_value(ctx: Context2d): void {
    const alpha = this.global_alpha.get_value()
    ctx.globalAlpha = alpha
  }
}

export class ImageScalar extends VisualUniforms {
  readonly global_alpha: p.UniformScalar<number>

  get doit(): boolean {
    const alpha = this.global_alpha.value
    return !(alpha == 0)
  }

  apply(ctx: Context2d): boolean {
    const {doit} = this
    if (doit) {
      this.set_value(ctx)
    }
    return doit
  }

  Values: ValuesOf<mixins.Image>
  values(): this["Values"] {
    return {
      global_alpha: this.global_alpha.value,
    }
  }

  set_value(ctx: Context2d): void {
    const alpha = this.global_alpha.value
    ctx.globalAlpha = alpha
  }
}

export class ImageVector extends VisualUniforms {
  readonly global_alpha: p.Uniform<number>

  get doit(): boolean {
    const {global_alpha} = this
    if (global_alpha.is_Scalar() && global_alpha.value == 0)
      return false
    return true
  }

  apply(ctx: Context2d, i: number): boolean {
    const {doit} = this
    if (doit) {
      this.set_vectorize(ctx, i)
    }
    return doit
  }

  Values: ValuesOf<mixins.Image>
  values(i: number): this["Values"] {
    return {
      alpha: this.global_alpha.get(i),
    }
  }

  set_vectorize(ctx: Context2d, i: number): void {
    const alpha = this.global_alpha.get(i)
    ctx.globalAlpha = alpha
  }
}

Image.prototype.type = "image"
Image.prototype.attrs = Object.keys(mixins.Image)

ImageScalar.prototype.type = "image"
ImageScalar.prototype.attrs = Object.keys(mixins.ImageScalar)

ImageVector.prototype.type = "image"
ImageVector.prototype.attrs = Object.keys(mixins.ImageVector)
