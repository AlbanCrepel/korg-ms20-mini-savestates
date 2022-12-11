export const Knob = class Knob {
    static BIG = 60
    static SMALL = 40

    static DISCRETE_STEP = 1
    static CONTINUOUS_STEP = 0.1

    constructor(label, id, value, min, max, step, circleDegreeOffset, size) {
        this.label = label
        this.id = id
        this.value = value
        this.min = min
        this.max = max
        this.step = step
        this.circleDegreeOffset = circleDegreeOffset
        this.size = size
    }
}
