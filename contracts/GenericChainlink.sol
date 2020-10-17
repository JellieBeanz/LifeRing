pragma solidity ^0.6.6;
pragma experimental ABIEncoderV2;

import "./chainlink/ChainlinkClient.sol";

contract GenericChainlink is ChainlinkClient {

    /**
     * Network: Kovan
     * Oracle:
     *      LinkPool:       0x56dd6586DB0D08c6Ce7B2f2805af28616E082455
     *      Listing URL:    https://market.link/nodes/323602b9-3831-4f8d-a66b-3fb7531649eb
     *      Address:        0x83dA1beEb89Ffaf56d0B7C50aFB0A66Fb4DF8cB1
     * Job:
     *      Name:           Get > Uint256
     *      Listing URL:    https://market.link/jobs/
     *      getBytes32      "c128fbb0175442c8ba828040fdd1a25e"
     *      getUint256      "b6602d14e4734c49a5e1ce19d45a4632"
     *      Fee:            0.1 LINK
     */

    using stringFunctions for string;



    uint256 private constant fee = 0.1 * 10 ** 18; // 0.1 LINK

    constructor() public {
    	setPublicChainlinkToken();
    }



    string public baseURL;
    function set_adapter(string memory adapter, string memory adapterParam)
    public view {
    	request.add(adapter, adapterParam);
    }
    function set_GET_URL(string memory protocol, string memory domainName, string memory path)
    public {
    	baseURL = protocol.concat("://").concat(domainName);
    	set_adapter("get", baseURL);
        set_adapter("extPath", path);
    }
    function set_GET_queryParams(string memory queryParamKey, string memory queryParamValue)
    public view {
        set_adapter(queryParamKey, queryParamValue);
    }



    address[] private oracles = [
        0xAA1DC356dc4B18f30C347798FD5379F3D77ABC5b, // LinkPool @ Kovan
        0x56dd6586DB0D08c6Ce7B2f2805af28616E082455  // Alpha Chain @ Kovan
    ];

    bytes32[] private getBytes32_jobIDs = [
        bytes32("c128fbb0175442c8ba828040fdd1a25e"), // LinkPool @ Kovan
        bytes32("b7285d4859da4b289c7861db971baf0a")  // Alpha Chain @ Kovan
    ];

    bytes32[] private getUint256_jobIDs = [
        bytes32("b6602d14e4734c49a5e1ce19d45a4632"), // LinkPool @ Kovan
        bytes32("c7dd72ca14b44f0c9b6cfcd4b7ec0a2c")  // Alpha Chain @ Kovan
    ];

    bytes32[][] private jobIDss = [getBytes32_jobIDs, getUint256_jobIDs];
    address public destinationOracle;
    bytes32 public destinationjobIDs;
    Chainlink.Request public request;
    function prepare_request(uint8 responseType, uint8 node)
    public {
    	destinationOracle = oracles[node];
        destinationjobIDs = jobIDss[responseType][node];
        bytes4 selector = responseType == 0 ? this.fulfill_bytes32.selector : this.fulfill_uint256.selector;
    	request = buildChainlinkRequest(destinationjobIDs, address(this), selector);
    }



    bytes32 public bytes32Response;
    uint256 public uint256Response;

    bytes32 last_requestId;

    function send_request()
    public {
    	sendChainlinkRequestTo(destinationOracle, request, fee);
    }

    function fulfill_bytes32(bytes32 _requestId, bytes32 _response)
    public {
        last_requestId = _requestId;
        bytes32Response = _response;
    }

    function fulfill_uint256(bytes32 _requestId, uint256 _response)
    public {
        last_requestId = _requestId;
        uint256Response = _response;
    }


}

library stringFunctions {

    function concat(string memory word1, string memory word2)
    external pure returns (string memory) {
        return string(abi.encodePacked(word1,word2));
    }
}