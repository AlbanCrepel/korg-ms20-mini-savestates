import {Knob} from "./Knob"

export const Controller = class Controller {
    constructor(options = {}) {
        this.vco1_wave = new Knob("wave form", "vco1_wave", options.vco1_wave ?? 1, 0, 3, Knob.DISCRETE_STEP, 100, Knob.BIG)
        this.vco1_pw = new Knob("pw", "vco1_pw", options.vco1_pw ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.vco1_scale = new Knob("scale", "vco1_scale", options.vco1_scale ?? 1, 0, 3, Knob.DISCRETE_STEP, 100, Knob.BIG)

        this.vco2_wave = new Knob("wave form", "vco2_wave", options.vco2_wave ?? 0, 0, 3, Knob.DISCRETE_STEP, 100, Knob.BIG)
        this.vco2_pitch = new Knob("pitch", "vco2_pitch", options.vco2_pitch ?? 0, -5, 5, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.vco2_scale = new Knob("scale", "vco2_scale", options.vco2_scale ?? 0, 0, 3, Knob.DISCRETE_STEP, 100, Knob.BIG)

        this.portamento = new Knob("time", "portamento", options.portamento ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.master_tune = new Knob("&nbsp;", "mater_tune", options.master_tune ?? 0, -5, 5, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.vco1_level = new Knob("VCO 1 level", "vco1_level", options.vco1_level ?? 10, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.vco2_level = new Knob("VCO 2 level", "vco2_level", options.vco2_level ?? 10, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.freq_modulation_mg_t_ext = new Knob("MG/T.EXT", "freq_modulation_mg_t_ext", options.freq_modulation_mg_t_ext ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.freq_modulation_egt_ext = new Knob("EGT/EXT", "freq_modulation_egt_ext", options.freq_modulation_egt_ext ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.cutoff_frequency_modulation_mg_t_ext_1 = new Knob("MG/T.EXT", "cutoff_frequency_modulation_mg_t_ext_1", options.cutoff_frequency_modulation_mg_t_ext_1 ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.cutoff_frequency_modulation_eg2_ext_1 = new Knob("EG2/XT", "cutoff_frequency_modulation_eg2_ext_1", options.cutoff_frequency_modulation_eg2_ext_1 ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.cutoff_frequency_modulation_mg_t_ext_2 = new Knob("MG/T.EXT", "cutoff_frequency_modulation_mg_t_ext_2", options.cutoff_frequency_modulation_eg2_ext_1 ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.cutoff_frequency_modulation_eg2_ext_2 = new Knob("EG2/XT", "cutoff_frequency_modulation_eg2_ext_2", options.cutoff_frequency_modulation_eg2_ext_2 ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.voltage_controlled_highpass_filter_cutoff_freq = new Knob("Cutoff frequency", "voltage_controlled_highpass_filter_cutoff_freq", options.voltage_controlled_highpass_filter_cutoff_freq ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.BIG)
        this.voltage_controlled_highpass_filter_peak = new Knob("Peak", "voltage_controlled_highpass_filter_peak", options.voltage_controlled_highpass_filter_peak ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.voltage_controlled_lowpass_filter_cutoff_freq = new Knob("Cutoff frequency", "voltage_controlled_lowpass_filter_cutoff_freq", options.voltage_controlled_lowpass_filter_cutoff_freq ?? 10, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.BIG)
        this.voltage_controlled_lowpass_filter_peak = new Knob("Peak", "voltage_controlled_lowpass_filter_peak", options.voltage_controlled_lowpass_filter_peak ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.modulation_generator_wave = new Knob("Wave form", "modulation_generator_wave", options.modulation_generator_wave ?? 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.modulation_generator_freq = new Knob("Frequency", "modulation_generator_freq", options.modulation_generator_freq ?? 5, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.envelope_generator_1_delay = new Knob("Delay time", "envelope_generator_1_delay", options.envelope_generator_1_delay ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_1_attack = new Knob("Attack time", "envelope_generator_1_attack", options.envelope_generator_1_attack ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_1_release = new Knob("Release time", "envelope_generator_1_release", options.envelope_generator_1_release ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.envelope_generator_2_hold = new Knob("Hold time", "envelope_generator_2_hold", options.envelope_generator_2_hold ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_2_attack = new Knob("Attack time", "envelope_generator_2_attack", options.envelope_generator_2_attack ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_2_decay = new Knob("Decay time", "envelope_generator_2_decay", options.envelope_generator_2_decay ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_2_sustain = new Knob("Sustain level", "envelope_generator_2_sustain", options.envelope_generator_2_sustain ?? 10, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.envelope_generator_2_release = new Knob("Release time", "envelope_generator_2_release", options.envelope_generator_2_release ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.external_signal_processor_signal = new Knob("Signal level", "external_signal_processor_signal", options.external_signal_processor_signal ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.external_signal_processor_low_cut_freq = new Knob("Low cut freq", "external_signal_processor_low_cut_freq", options.external_signal_processor_low_cut_freq ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.external_signal_processor_high_cut_freq = new Knob("High cut freq", "external_signal_processor_high_cut_freq", options.external_signal_processor_high_cut_freq ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.external_signal_processor_cv_adjust = new Knob("CV adjust", "external_signal_processor_cv_adjust", options.external_signal_processor_cv_adjust ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)
        this.external_signal_processor_threshold = new Knob("Threshold level", "external_signal_processor_threshold", options.external_signal_processor_threshold ?? 0, 0, 10, Knob.CONTINUOUS_STEP, 60, Knob.SMALL)

        this.volume = new Knob("Volume", "volume", options.volume ?? 4, 1, 10, Knob.CONTINUOUS_STEP, 60, Knob.BIG)

        this.patchEdges = options.patchEdges ?? []

        this.patchTitle = options.patchTitle || ""
        this.description = options.description || ""
    }

    save = () => {
        const dataToExport = {}

        for (const [key, value] of Object.entries(this)) {
            if (Array.isArray(this[key]) || typeof this[key] === "string") {
                dataToExport[key] = value
            } else if (typeof this[key] === "object") {
                dataToExport[key] = value.value
            }
        }

        const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(dataToExport))}`
        const downloadAnchorNode = document.createElement('a')
        downloadAnchorNode.setAttribute("href", dataStr)
        downloadAnchorNode.setAttribute("download", `${ this.patchTitle || 'korg-ms20-mini-preset' }.json`)
        document.body.appendChild(downloadAnchorNode) // required for firefox
        downloadAnchorNode.click()
        downloadAnchorNode.remove()
    }
}
