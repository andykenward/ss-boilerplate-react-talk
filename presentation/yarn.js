 export const Yarn = () => {<div><Slide transition={["fade"]}>

          <Image alt="Yarn Logo" width="25%" height="25%" src={images.yarn} />

          <Appear>
            <Heading size={4} textColor="secondary">Yarn</Heading>
          </Appear>
          <Appear><Heading size={6}>Deterministic</Heading></Appear>
          <Appear>
            <Text>
              The same dependencies will be installed the same exact way across every machine regardless of install order.
            </Text>
          </Appear>

        </Slide>
        <Slide transition={["fade"]}>
          <Terminal
            title="1. elijahm@elijahm: ~(zsh)"
            output={[
              <Typist key="t1" cursor={cursor}>yarn upgrade-interactive</Typist>,
              <Typist key="t1" cursor={cursor}>yarn upgrade-interactive v0.24.4</Typist>,
              <div style={{ color: "#33B969" }}>TOTAL: 174 SUCCESS</div>,
              <div>
                <div>
                  =============================== Coverage summary ===============================
                </div>
                <div style={{ color: "#DEC612" }}>
                  Statements   : 51.29% ( 278/542 )
                </div>
                <div style={{ color: "#EE5057" }}>
                  Branches     : 38.78% ( 95/245 )
                </div>
                <div style={{ color: "#EE5057" }}>
                  Functions    : 46.21% ( 61/132 )
                </div>
                <div style={{ color: "#DEC612" }}>
                  Lines        : 52.69% ( 274/520 )
                </div>
                <div>
                  ================================================================================
                </div>
              </div>
            ]}
          />
        </Slide></div>};