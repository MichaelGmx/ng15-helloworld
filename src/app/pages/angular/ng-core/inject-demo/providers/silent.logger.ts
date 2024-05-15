function silentLogger() {
  console.log(this.logs);
}

export const SilentLogger = {
  logs: ['Silent logger says "SHhhhh!". Provided via "useValue"'],
  log: silentLogger
}