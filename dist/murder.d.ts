interface Plot {
    victim: string;
    weapon: string;
    room: string;
}
type Plots = Record<string, Plot>;
declare const WEAPONS: readonly string[];
declare const ROOMS: readonly string[];
declare const KILLERS: readonly string[];
declare const shuffle: <T>(array: readonly T[]) => T[];
declare const titleCase: (str: string) => string;
declare const setup: (killers: readonly string[], weapons: readonly string[], rooms: readonly string[]) => Plots;
declare let plots: Plots;
declare const chooseVictim: () => void;
declare const clearResult: () => void;
//# sourceMappingURL=murder.d.ts.map